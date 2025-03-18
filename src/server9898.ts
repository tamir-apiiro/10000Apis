
const express = require('express')
import {handler9898} from "./handler9898";
const app = express()
app.get('/9898', handler9898)
app.listen(3000, () => {})
        