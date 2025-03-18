
const express = require('express')
import {handler9864} from "./handler9864";
const app = express()
app.get('/9864', handler9864)
app.listen(3000, () => {})
        