
const express = require('express')
import {handler9490} from "./handler9490";
const app = express()
app.get('/9490', handler9490)
app.listen(3000, () => {})
        