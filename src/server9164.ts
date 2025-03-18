
const express = require('express')
import {handler9164} from "./handler9164";
const app = express()
app.get('/9164', handler9164)
app.listen(3000, () => {})
        