
const express = require('express')
import {handler9169} from "./handler9169";
const app = express()
app.get('/9169', handler9169)
app.listen(3000, () => {})
        