
const express = require('express')
import {handler9275} from "./handler9275";
const app = express()
app.get('/9275', handler9275)
app.listen(3000, () => {})
        