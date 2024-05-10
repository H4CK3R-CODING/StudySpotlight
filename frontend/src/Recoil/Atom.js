
import {atom} from "recoil"

const semAtom = atom({
    key: "semAtom",
    default: 1
})

const branchAtom = atom({
    key: "branchAtom",
    default: "cse"
})


const Atom = {
    semAtom,
    branchAtom,
}

export default Atom;