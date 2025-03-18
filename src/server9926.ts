
const express = require('express')
import {handler9926} from "./handler9926";
const app = express()
app.get('/9926', handler9926)
app.listen(3000, () => {})
        