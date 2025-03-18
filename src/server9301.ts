
const express = require('express')
import {handler9301} from "./handler9301";
const app = express()
app.get('/9301', handler9301)
app.listen(3000, () => {})
        