
const express = require('express')
import {handler522} from "./handler522";
const app = express()
app.get('/522', handler522)
app.listen(3000, () => {})
        