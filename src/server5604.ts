
const express = require('express')
import {handler5604} from "./handler5604";
const app = express()
app.get('/5604', handler5604)
app.listen(3000, () => {})
        