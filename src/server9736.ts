
const express = require('express')
import {handler9736} from "./handler9736";
const app = express()
app.get('/9736', handler9736)
app.listen(3000, () => {})
        