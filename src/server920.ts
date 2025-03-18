
const express = require('express')
import {handler920} from "./handler920";
const app = express()
app.get('/920', handler920)
app.listen(3000, () => {})
        