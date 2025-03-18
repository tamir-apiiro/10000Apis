
const express = require('express')
import {handler9482} from "./handler9482";
const app = express()
app.get('/9482', handler9482)
app.listen(3000, () => {})
        