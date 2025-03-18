
const express = require('express')
import {handler9485} from "./handler9485";
const app = express()
app.get('/9485', handler9485)
app.listen(3000, () => {})
        