
const express = require('express')
import {handler9758} from "./handler9758";
const app = express()
app.get('/9758', handler9758)
app.listen(3000, () => {})
        