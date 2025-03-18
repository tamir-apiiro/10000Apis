
const express = require('express')
import {handler9707} from "./handler9707";
const app = express()
app.get('/9707', handler9707)
app.listen(3000, () => {})
        