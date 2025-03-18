
const express = require('express')
import {handler9352} from "./handler9352";
const app = express()
app.get('/9352', handler9352)
app.listen(3000, () => {})
        