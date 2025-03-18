
const express = require('express')
import {handler9055} from "./handler9055";
const app = express()
app.get('/9055', handler9055)
app.listen(3000, () => {})
        