
const express = require('express')
import {handler9580} from "./handler9580";
const app = express()
app.get('/9580', handler9580)
app.listen(3000, () => {})
        