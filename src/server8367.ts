
const express = require('express')
import {handler8367} from "./handler8367";
const app = express()
app.get('/8367', handler8367)
app.listen(3000, () => {})
        