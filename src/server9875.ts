
const express = require('express')
import {handler9875} from "./handler9875";
const app = express()
app.get('/9875', handler9875)
app.listen(3000, () => {})
        