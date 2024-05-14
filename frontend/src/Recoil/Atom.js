
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
    default: 10.0
})

const isLoggedIn = atom({
    key: "isLoggedIn",
    default: false
})


const Atom = {
    semAtom,
    branchAtom,
    totalMaterial,
    isLoggedIn
}

export default Atom;