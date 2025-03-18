
const express = require('express')
import {handler7674} from "./handler7674";
const app = express()
app.get('/7674', handler7674)
app.listen(3000, () => {})
        