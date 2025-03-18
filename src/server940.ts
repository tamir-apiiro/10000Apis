
const express = require('express')
import {handler940} from "./handler940";
const app = express()
app.get('/940', handler940)
app.listen(3000, () => {})
        