
const express = require('express')
import {handler9769} from "./handler9769";
const app = express()
app.get('/9769', handler9769)
app.listen(3000, () => {})
        