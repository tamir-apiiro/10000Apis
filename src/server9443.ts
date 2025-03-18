
const express = require('express')
import {handler9443} from "./handler9443";
const app = express()
app.get('/9443', handler9443)
app.listen(3000, () => {})
        