
const express = require('express')
import {handler9334} from "./handler9334";
const app = express()
app.get('/9334', handler9334)
app.listen(3000, () => {})
        