
const express = require('express')
import {handler9565} from "./handler9565";
const app = express()
app.get('/9565', handler9565)
app.listen(3000, () => {})
        