
const express = require('express')
import {handler6306} from "./handler6306";
const app = express()
app.get('/6306', handler6306)
app.listen(3000, () => {})
        