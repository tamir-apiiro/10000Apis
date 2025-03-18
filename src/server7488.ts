
const express = require('express')
import {handler7488} from "./handler7488";
const app = express()
app.get('/7488', handler7488)
app.listen(3000, () => {})
        