
const express = require('express')
import {handler9063} from "./handler9063";
const app = express()
app.get('/9063', handler9063)
app.listen(3000, () => {})
        