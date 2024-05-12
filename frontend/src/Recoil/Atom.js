
import {atom} from "recoil"

const semAtom = atom({
    key: "semAtom",
    default: 1
})

const branchAtom = atom({
    key: "branchAtom",
    default: "cse"
})

const totalMaterial = atom({
    key: "totalMaterial",
    default: 3.0
})


const Atom = {
    semAtom,
    branchAtom,
    totalMaterial
}

export default Atom;