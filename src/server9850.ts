
const express = require('express')
import {handler9850} from "./handler9850";
const app = express()
app.get('/9850', handler9850)
app.listen(3000, () => {})
        