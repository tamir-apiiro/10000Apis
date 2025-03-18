
const express = require('express')
import {handler9670} from "./handler9670";
const app = express()
app.get('/9670', handler9670)
app.listen(3000, () => {})
        