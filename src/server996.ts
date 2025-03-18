
const express = require('express')
import {handler996} from "./handler996";
const app = express()
app.get('/996', handler996)
app.listen(3000, () => {})
        