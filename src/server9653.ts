
const express = require('express')
import {handler9653} from "./handler9653";
const app = express()
app.get('/9653', handler9653)
app.listen(3000, () => {})
        