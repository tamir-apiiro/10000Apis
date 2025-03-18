
const express = require('express')
import {handler9821} from "./handler9821";
const app = express()
app.get('/9821', handler9821)
app.listen(3000, () => {})
        