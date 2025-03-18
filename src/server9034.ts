
const express = require('express')
import {handler9034} from "./handler9034";
const app = express()
app.get('/9034', handler9034)
app.listen(3000, () => {})
        