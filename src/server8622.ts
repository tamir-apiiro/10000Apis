
const express = require('express')
import {handler8622} from "./handler8622";
const app = express()
app.get('/8622', handler8622)
app.listen(3000, () => {})
        