
const express = require('express')
import {handler9399} from "./handler9399";
const app = express()
app.get('/9399', handler9399)
app.listen(3000, () => {})
        