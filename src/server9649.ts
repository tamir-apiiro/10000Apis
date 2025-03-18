
const express = require('express')
import {handler9649} from "./handler9649";
const app = express()
app.get('/9649', handler9649)
app.listen(3000, () => {})
        