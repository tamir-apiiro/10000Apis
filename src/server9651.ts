
const express = require('express')
import {handler9651} from "./handler9651";
const app = express()
app.get('/9651', handler9651)
app.listen(3000, () => {})
        