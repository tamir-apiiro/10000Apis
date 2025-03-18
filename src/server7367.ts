
const express = require('express')
import {handler7367} from "./handler7367";
const app = express()
app.get('/7367', handler7367)
app.listen(3000, () => {})
        