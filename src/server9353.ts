
const express = require('express')
import {handler9353} from "./handler9353";
const app = express()
app.get('/9353', handler9353)
app.listen(3000, () => {})
        