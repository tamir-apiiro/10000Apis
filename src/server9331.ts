
const express = require('express')
import {handler9331} from "./handler9331";
const app = express()
app.get('/9331', handler9331)
app.listen(3000, () => {})
        