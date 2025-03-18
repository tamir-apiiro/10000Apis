
const express = require('express')
import {handler9496} from "./handler9496";
const app = express()
app.get('/9496', handler9496)
app.listen(3000, () => {})
        