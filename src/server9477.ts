
const express = require('express')
import {handler9477} from "./handler9477";
const app = express()
app.get('/9477', handler9477)
app.listen(3000, () => {})
        