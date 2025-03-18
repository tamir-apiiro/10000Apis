
const express = require('express')
import {handler9902} from "./handler9902";
const app = express()
app.get('/9902', handler9902)
app.listen(3000, () => {})
        