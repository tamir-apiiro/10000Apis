
const express = require('express')
import {handler9660} from "./handler9660";
const app = express()
app.get('/9660', handler9660)
app.listen(3000, () => {})
        