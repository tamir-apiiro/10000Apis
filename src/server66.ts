
const express = require('express')
import {handler66} from "./handler66";
const app = express()
app.get('/66', handler66)
app.listen(3000, () => {})
        