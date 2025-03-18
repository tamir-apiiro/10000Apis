
const express = require('express')
import {handler9703} from "./handler9703";
const app = express()
app.get('/9703', handler9703)
app.listen(3000, () => {})
        