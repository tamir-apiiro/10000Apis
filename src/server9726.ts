
const express = require('express')
import {handler9726} from "./handler9726";
const app = express()
app.get('/9726', handler9726)
app.listen(3000, () => {})
        