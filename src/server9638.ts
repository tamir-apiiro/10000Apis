
const express = require('express')
import {handler9638} from "./handler9638";
const app = express()
app.get('/9638', handler9638)
app.listen(3000, () => {})
        