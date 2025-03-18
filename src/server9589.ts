
const express = require('express')
import {handler9589} from "./handler9589";
const app = express()
app.get('/9589', handler9589)
app.listen(3000, () => {})
        