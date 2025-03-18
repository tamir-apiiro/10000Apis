
const express = require('express')
import {handler9088} from "./handler9088";
const app = express()
app.get('/9088', handler9088)
app.listen(3000, () => {})
        